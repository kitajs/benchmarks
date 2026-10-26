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
* __Node:__ `v20.20.2`
* __Run:__ Mon Oct 26 2026 03:00:26 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 73866.0    | 13.05        | 13.17         |
| kita                     | 1.1.36   | ✓      | 72057.6    | 13.43        | 12.92         |
| polka                    | 0.5.2    | ✓      | 71962.0    | 13.41        | 12.83         |
| connect                  | 3.7.0    | ✗      | 71952.0    | 13.44        | 12.83         |
| fastify                  | 4.29.1   | ✓      | 71047.6    | 13.62        | 12.74         |
| server-base              | 7.1.32   | ✗      | 70903.6    | 13.61        | 12.64         |
| server-base-router       | 7.1.32   | ✓      | 70650.0    | 13.65        | 12.60         |
| rayo                     | 1.4.6    | ✓      | 69444.0    | 13.91        | 12.38         |
| connect-router           | 1.3.8    | ✓      | 69068.8    | 13.97        | 12.32         |
| hono                     | 4.13.14  | ✓      | 62896.0    | 15.40        | 10.32         |
| 0http                    | 3.5.3    | ✓      | 60804.8    | 15.96        | 10.84         |
| polkadot                 | 1.0.0    | ✗      | 58984.8    | 16.46        | 10.52         |
| koa                      | 2.16.4   | ✗      | 58367.2    | 16.60        | 10.41         |
| h3-router                | 1.15.11  | ✓      | 57649.6    | 16.85        | 10.28         |
| take-five                | 2.0.0    | ✓      | 57256.0    | 16.96        | 20.59         |
| h3                       | 1.15.11  | ✗      | 56876.8    | 17.09        | 10.14         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 54320.8    | 17.90        | 9.69          |
| restana                  | 4.9.9    | ✓      | 53576.8    | 18.16        | 9.56          |
| restify                  | 11.1.0   | ✓      | 52308.0    | 18.61        | 9.43          |
| koa-router               | 12.0.1   | ✓      | 51372.0    | 18.98        | 9.16          |
| hapi                     | 21.4.11  | ✓      | 47520.8    | 20.55        | 8.47          |
| express                  | 4.22.3   | ✓      | 16540.7    | 59.93        | 2.95          |
| express-with-middlewares | 4.22.3   | ✓      | 16063.2    | 61.72        | 5.97          |
| fastify-big-json         | 4.29.1   | ✓      | 14852.0    | 66.79        | 170.88        |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
