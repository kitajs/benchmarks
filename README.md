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
* __Node:__ `v20.19.5`
* __Run:__ Mon Oct 20 2025 01:36:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.5 | ✗      | 71925.2    | 13.41        | 12.83         |
| polka                    | 0.5.2    | ✓      | 71738.0    | 13.44        | 12.79         |
| fastify                  | 4.29.1   | ✓      | 70562.0    | 13.68        | 12.65         |
| connect                  | 3.7.0    | ✗      | 69834.8    | 13.83        | 12.45         |
| rayo                     | 1.4.6    | ✓      | 69736.0    | 13.85        | 12.44         |
| kita                     | 1.1.36   | ✓      | 69369.2    | 13.92        | 12.44         |
| server-base-router       | 7.1.32   | ✓      | 69323.6    | 13.94        | 12.36         |
| server-base              | 7.1.32   | ✗      | 68525.2    | 14.10        | 12.22         |
| connect-router           | 1.3.8    | ✓      | 64316.0    | 15.04        | 11.47         |
| polkadot                 | 1.0.0    | ✗      | 61139.2    | 15.87        | 10.90         |
| 0http                    | 3.5.3    | ✓      | 59588.0    | 16.28        | 10.63         |
| h3                       | 1.15.4   | ✗      | 58268.8    | 16.67        | 10.39         |
| h3-router                | 1.15.4   | ✓      | 57077.6    | 17.02        | 10.18         |
| hono                     | 4.10.1   | ✓      | 56102.4    | 17.34        | 9.20          |
| restana                  | 4.9.9    | ✓      | 55472.8    | 17.53        | 9.89          |
| koa                      | 2.16.3   | ✗      | 54454.4    | 17.85        | 9.71          |
| take-five                | 2.0.0    | ✓      | 50916.8    | 19.14        | 18.31         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 50910.4    | 19.13        | 9.08          |
| restify                  | 11.1.0   | ✓      | 50764.8    | 19.20        | 9.15          |
| koa-router               | 12.0.1   | ✓      | 48388.8    | 20.17        | 8.63          |
| hapi                     | 21.4.3   | ✓      | 43174.4    | 22.66        | 7.70          |
| express                  | 4.21.2   | ✓      | 13798.4    | 71.93        | 2.46          |
| fastify-big-json         | 4.29.1   | ✓      | 13092.6    | 75.83        | 150.63        |
| express-with-middlewares | 4.21.2   | ✓      | 12899.8    | 76.96        | 4.80          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
