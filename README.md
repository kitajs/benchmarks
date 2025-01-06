<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.1`
* __Run:__ Mon Jan 06 2025 01:30:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 47597.6    | 20.52        | 8.49          |
| fastify                  | 4.29.0   | ✓      | 46842.4    | 20.84        | 8.40          |
| kita                     | 1.1.36   | ✓      | 46743.2    | 20.88        | 8.38          |
| polka                    | 0.5.2    | ✓      | 46388.8    | 21.05        | 8.27          |
| 0http                    | 3.5.3    | ✓      | 46328.0    | 21.09        | 8.26          |
| connect                  | 3.7.0    | ✗      | 45734.4    | 21.37        | 8.16          |
| server-base              | 7.1.32   | ✗      | 45600.0    | 21.43        | 8.13          |
| rayo                     | 1.4.6    | ✓      | 45509.6    | 21.47        | 8.12          |
| polkadot                 | 1.0.0    | ✗      | 45411.2    | 21.53        | 8.10          |
| server-base-router       | 7.1.32   | ✓      | 45095.2    | 21.68        | 8.04          |
| h3-router                | 1.13.0   | ✓      | 43672.8    | 22.40        | 7.79          |
| h3                       | 1.13.0   | ✗      | 43596.0    | 22.45        | 7.77          |
| connect-router           | 1.3.8    | ✓      | 43248.0    | 22.61        | 7.71          |
| restana                  | 4.9.9    | ✓      | 42341.6    | 23.12        | 7.55          |
| hono                     | 4.6.16   | ✓      | 40657.6    | 24.08        | 6.67          |
| koa                      | 2.15.3   | ✗      | 38216.0    | 25.66        | 6.82          |
| take-five                | 2.0.0    | ✓      | 35393.8    | 27.75        | 12.73         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35381.4    | 27.76        | 6.31          |
| restify                  | 11.1.0   | ✓      | 34715.0    | 28.31        | 6.26          |
| koa-router               | 12.0.1   | ✓      | 34634.6    | 28.37        | 6.18          |
| hapi                     | 21.3.12  | ✓      | 32046.8    | 30.69        | 5.71          |
| fastify-big-json         | 4.29.0   | ✓      | 11759.6    | 84.47        | 135.30        |
| express                  | 4.21.2   | ✓      | 11138.0    | 89.17        | 1.99          |
| express-with-middlewares | 4.21.2   | ✓      | 10196.6    | 97.47        | 3.79          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
